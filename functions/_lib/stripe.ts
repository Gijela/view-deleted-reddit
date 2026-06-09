interface StripeCheckoutSessionParams {
  query: string;
  siteUrl: string;
  customerEmail?: string;
}

interface StripeCheckoutSession {
  id: string;
  url?: string;
  payment_status?: string;
  metadata?: {
    query?: string;
  };
}

interface StripeErrorResponse {
  error?: {
    message?: string;
  };
}

export interface StripeEnv {
  STRIPE_SECRET_KEY: string;
}

const STRIPE_API_BASE = 'https://api.stripe.com/v1';

function appendFormValue(params: URLSearchParams, key: string, value: string | number) {
  params.append(key, String(value));
}

async function stripeRequest<T>(env: StripeEnv, path: string, init?: RequestInit): Promise<T> {
  if (!env.STRIPE_SECRET_KEY) {
    throw new Error('Stripe secret key is not configured');
  }

  const response = await fetch(`${STRIPE_API_BASE}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${env.STRIPE_SECRET_KEY}`,
      ...init?.headers,
    },
  });

  const data = await response.json() as StripeErrorResponse | T;

  if (!response.ok) {
    const message = (data as StripeErrorResponse).error?.message || 'Stripe request failed';
    throw new Error(message);
  }

  return data as T;
}

export async function createCheckoutSession(
  env: StripeEnv,
  { query, siteUrl, customerEmail }: StripeCheckoutSessionParams,
): Promise<StripeCheckoutSession> {
  const params = new URLSearchParams();

  appendFormValue(params, 'mode', 'payment');
  appendFormValue(params, 'success_url', `${siteUrl}/success?session_id={CHECKOUT_SESSION_ID}`);
  appendFormValue(params, 'cancel_url', `${siteUrl}/?canceled=1`);
  appendFormValue(params, 'line_items[0][quantity]', 1);
  appendFormValue(params, 'line_items[0][price_data][currency]', 'usd');
  appendFormValue(params, 'line_items[0][price_data][unit_amount]', 199);
  appendFormValue(params, 'line_items[0][price_data][product_data][name]', 'ViewDeletedReddit Search');
  appendFormValue(params, 'metadata[query]', query);

  if (customerEmail) {
    appendFormValue(params, 'customer_email', customerEmail);
  }

  return stripeRequest<StripeCheckoutSession>(env, '/checkout/sessions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: params,
  });
}

export async function retrieveCheckoutSession(
  env: StripeEnv,
  sessionId: string,
): Promise<StripeCheckoutSession> {
  return stripeRequest<StripeCheckoutSession>(
    env,
    `/checkout/sessions/${encodeURIComponent(sessionId)}`,
  );
}

export function getPaidSessionQuery(session: StripeCheckoutSession): string | null {
  if (session.payment_status !== 'paid') {
    return null;
  }

  const query = session.metadata?.query?.trim();
  return query || null;
}

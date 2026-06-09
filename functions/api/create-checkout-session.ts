import { createCheckoutSession, type StripeEnv } from '../_lib/stripe';

interface Env extends StripeEnv {
  SITE_URL?: string;
  DEFAULT_CUSTOMER_EMAIL?: string;
}

interface PagesContext<Env> {
  request: Request;
  env: Env;
}

type PagesHandler<Env> = (context: PagesContext<Env>) => Promise<Response> | Response;

function jsonResponse(body: unknown, init?: ResponseInit) {
  return new Response(JSON.stringify(body), {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      ...init?.headers,
    },
  });
}

function getSiteUrl(context: PagesContext<Env>) {
  const configuredUrl = context.env.SITE_URL?.replace(/\/$/, '');

  if (configuredUrl) {
    return configuredUrl;
  }

  const requestUrl = new URL(context.request.url);
  return requestUrl.origin;
}

export const onRequestPost: PagesHandler<Env> = async (context) => {
  try {
    const body = await context.request.json() as { query?: unknown };
    const query = typeof body.query === 'string' ? body.query.trim() : '';

    if (!query) {
      return jsonResponse({
        success: false,
        error: 'Search query is required',
      }, { status: 400 });
    }

    const session = await createCheckoutSession(context.env, {
      query,
      siteUrl: getSiteUrl(context),
      customerEmail: context.env.DEFAULT_CUSTOMER_EMAIL,
    });

    if (!session.url) {
      return jsonResponse({
        success: false,
        error: 'Unable to create checkout session',
      }, { status: 502 });
    }

    return jsonResponse({
      success: true,
      url: session.url,
    });
  } catch (error) {
    console.error('Checkout session error:', error);

    return jsonResponse({
      success: false,
      error: error instanceof Error ? error.message : 'Unable to create checkout session',
    }, { status: 500 });
  }
};

export const onRequestGet: PagesHandler<Env> = async () => {
  return jsonResponse({
    success: false,
    error: 'Method not allowed',
  }, { status: 405 });
};

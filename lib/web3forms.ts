// Web3Forms — emails form submissions to the inbox registered against this key.
// The access key is public by design: Web3Forms submissions are made from the
// browser, and the key only lets someone send mail to our own inbox.
// Free plan: browser-side submissions only (server-side calls need Pro).

export const WEB3FORMS_ACCESS_KEY = "bace1fa3-3b99-4ba9-8a37-bb99e88b4147";
export const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export async function submitToWeb3Forms(data: FormData): Promise<boolean> {
  data.set("access_key", WEB3FORMS_ACCESS_KEY);
  if (!data.has("from_name")) data.set("from_name", "Velocity B website");

  try {
    const res = await fetch(WEB3FORMS_ENDPOINT, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: data,
    });
    const result = await res.json();
    return Boolean(result?.success);
  } catch {
    return false;
  }
}

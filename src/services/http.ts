const baseUrl = import.meta.env.VITE_API_BASE_URI as string;

type Response<T> = {
  data: T;
  meta?: T;
  statusCode: number;
  message: string;
};

export const post = async <T>(
  endpoint: string,
  data: T
): Promise<Response<T>> => {
  const response = await fetch(`${baseUrl}/${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`Network response was not ok: ${response.statusText}`);
  }

  return (await response.json()) as Response<T>;
};

export const get = async <T>(endpoint: string): Promise<Response<T>> => {
  const response = await fetch(`${baseUrl}/${endpoint}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      // Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Network response was not ok: ${response.statusText}`);
  }

  return (await response.json()) as Response<T>;
};

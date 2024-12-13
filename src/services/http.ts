const baseUrl = import.meta.env.VITE_API_BASE_URI as string;

type Response<T> = {
  data: T;
  meta?: T;
  statusCode: number;
  message: string;
};

interface IParams {
  page: number;
  limit: number;
  search: string;
}

export const get = async <T>(
  endpoint: string,
  params?: IParams
): Promise<Response<T>> => {
  // Construct query string only if params are provided

  const queryString = params
    ? new URLSearchParams({
        ...(params.page ? { page: params.page.toString() } : {}),
        ...(params.limit ? { limit: params.limit.toString() } : {}),
        ...(params.search ? { search: params.search } : {}),
      }).toString()
    : "";

  const response = await fetch(
    `${baseUrl}/${endpoint}${queryString ? `?${queryString}` : ""}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Network response was not ok: ${response.statusText}`);
  }

  return (await response.json()) as Response<T>;
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

export const put = async <T>(
  endpoint: string,
  id: string,
  data: T
): Promise<Response<T>> => {
  const response = await fetch(`${baseUrl}/${endpoint}/${id}`, {
    method: "PUT",
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

export const del = async <T>(
  endpoint: string,
  id: string
): Promise<Response<T>> => {
  const response = await fetch(`${baseUrl}/${endpoint}/${id}`, {
    method: "DELETE",
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

export const uploadFile = async <T>(
  endpoint: string,
  file: File,
  additionalData?: Record<string, any>
): Promise<Response<T>> => {
  const formData = new FormData();

  // Append the file
  formData.append("file", file);

  // Append any additional data if provided
  if (additionalData) {
    for (const key in additionalData) {
      formData.append(key, additionalData[key]);
    }
  }

  const response = await fetch(`${baseUrl}/${endpoint}`, {
    method: "POST",
    body: formData,
    // No need to set 'Content-Type', fetch will handle it with FormData
  });

  if (!response.ok) {
    throw new Error(`Network response was not ok: ${response.statusText}`);
  }

  return (await response.json()) as Response<T>;
};

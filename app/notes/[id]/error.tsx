"use client";

function Error({ error }: { error: Error }) {
  return <p>Could not fetch note details. {error.message}</p>;
}

export default Error;
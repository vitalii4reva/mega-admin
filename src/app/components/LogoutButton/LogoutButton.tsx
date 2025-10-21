"use client";
import React from "react";

export default function LogoutButton({ onClick }: { onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={() => onClick?.()}
      className="px-3 py-1 bg-red-600 text-white rounded"
    >
      Logout
    </button>
  );
}
// Badge.js
import React from 'react';

const Badge = ({ technology }) => {
  return (
    <span className="bg-gray-200 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
      {technology}
    </span>
  );
};

export default Badge;

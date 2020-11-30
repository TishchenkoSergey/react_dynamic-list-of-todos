import React, { memo } from 'react';

export const LoadError = memo(() => (
  <div className="error">
    Server not responding!
    Reload the page!
  </div>
));

import { expect, afterEach, beforeEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';
import matchers from '@testing-library/jest-dom/matchers';

expect.extend(matchers);

// beforeEach(() => {
//   vi.mock('react-redux', async () => {
//     const actual = await vi.importActual<typeof import('react-redux')>('react-redux');
//     const mockDispatch = vi.fn();
//     const mockSelector = vi.fn();
//     return {
//       ...actual,
//       useDispatch: () => mockDispatch,
//       useSelector: () => mockSelector,
//     };
//   });
// });
afterEach(() => {
  cleanup();
});

import { render, screen } from '@testing-library/react';
import Countdown from './Countdown';

beforeAll(() => {
    jest.useFakeTimers();
  });
  
afterAll(() => {
  jest.useRealTimers();
});

test('countdown number shows correctly as time elapsed', async () => {
  render(<Countdown />);
  await screen.findByText('60 seconds left');
  // Fast-forward time by 10s
  jest.advanceTimersByTime(10000);
  await screen.findByText('50 seconds left');
});
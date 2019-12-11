import axios from 'axios';
import { renderHook, act } from '@testing-library/react-hooks';
import { useFetch } from './DataLoaderHooks';

// <DataLoader /> 안에서 호출하는 axios를 목킹함
jest.mock('axios', () => ({
  get: jest.fn().mockImplementation(url => {
    return Promise.resolve({
      data: [
        { id: 1, title: 'Load of Rings' },
        { id: 2, title: 'Mars' },
      ],
    });
  }),
}));

describe('<DataLoader /> (Testing-library)', () => {
  it('should have list of data', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetch());
    await waitForNextUpdate();
    expect(result.current[0]).toEqual({ id: 1, title: 'Load of Rings' });
  });
});

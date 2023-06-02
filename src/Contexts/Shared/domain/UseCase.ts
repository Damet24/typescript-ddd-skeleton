
export interface UseCase<T1, T2> {
    run: (params: T1) => Promise<T2>
  }
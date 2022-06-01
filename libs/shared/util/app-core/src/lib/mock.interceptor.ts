export abstract class MockInterceptor {
  protected areMocksEnabled() {
    return localStorage.getItem('enableMocks') === 'true';
  }
}

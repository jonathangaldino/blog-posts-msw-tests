import { mockServer } from "./tests/mockServer";

beforeAll(() => mockServer.listen());

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => mockServer.resetHandlers());

// Clean up after the tests are finished.
afterAll(() => mockServer.close());

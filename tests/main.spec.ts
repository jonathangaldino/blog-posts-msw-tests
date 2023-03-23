import axios from "axios";
import { mockCatsEndpoint } from "./mockCatsEndpoint";

interface CatsResponse {
  data: string[];
}

describe("Main test", () => {
  it("should return an one meow fact", async () => {
    mockCatsEndpoint();

    const {
      data: { data }
    } = await axios.get<CatsResponse>(
      "https://meowfacts.herokuapp.com/?count=1"
    );

    expect(data.length).toBe(1);
  });

  it("should return exactly what was mocked", async () => {
    mockCatsEndpoint();

    const {
      data: { data }
    } = await axios.get<CatsResponse>(
      "https://meowfacts.herokuapp.com/?count=1"
    );

    expect(data).toEqual([
      "Mother cats teach their kittens to use the litter box."
    ]);
  });

  it("should return status 200", async () => {
    mockCatsEndpoint();

    const { status } = await axios.get<CatsResponse>(
      "https://meowfacts.herokuapp.com/?count=1"
    );

    expect(status).toEqual(200);
  });

  it("should return status 400", async () => {
    mockCatsEndpoint({ status: 400 });

    expect(
      axios.get<CatsResponse>("https://meowfacts.herokuapp.com/?count=1")
    ).rejects.toThrow();
  });
});

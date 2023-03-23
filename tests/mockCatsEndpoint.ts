import { rest } from "msw";
import { mockServer } from "./mockServer";

interface Responses {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [id: number]: { data: any };
}

const _defaultProps = {
  status: 200
};

const responses: Responses = {
  200: { data: ["Mother cats teach their kittens to use the litter box."] },
  400: { data: { error: "Request failed" } }
};

export const mockCatsEndpoint = ({ status } = _defaultProps) => {
  mockServer.use(
    rest.get(`https://meowfacts.herokuapp.com`, (req, res, ctx) => {
      return res(ctx.json(responses[status]), ctx.status(status));
    })
  );
};

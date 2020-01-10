import { HandlerInput, RequestHandler } from 'ask-sdk';

import { buildContext, buildResponse, launch } from './lifecycle';

const LaunchHandler: RequestHandler = {
  canHandle(input: HandlerInput): boolean {
    const { type } = input.requestEnvelope.request;
    return type === 'LaunchRequest' || type === 'CanFulfillIntentRequest';
  },
  async handle(input: HandlerInput) {
    const context = await buildContext(input, null);
    await launch(context, input);

    context.update();

    return buildResponse(context, input);
  },
};

export default LaunchHandler;
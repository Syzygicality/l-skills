import { BackboardClient } from 'backboard-sdk';

export default class BackboardWrapper {
  private readonly client: BackboardClient;

  private getAPIKey() {
    const APIKey = process.env.BACKBOARD_API_KEY;
    if (!APIKey) throw new Error('Backboard.io API key missing from .env');
    return APIKey;
  }

  constructor() {
    this.client = new BackboardClient({ apiKey: this.getAPIKey() });
  }
}

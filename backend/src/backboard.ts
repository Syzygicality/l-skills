import { BackboardClient } from 'backboard-sdk';

export default class BackboardWrapper {
  private readonly assistantID: string;
  private readonly client: BackboardClient;

  private getEnvValue(key: string) {
    const APIKey = process.env[key];
    if (!APIKey) throw new Error(`${key} missing from .env`);
    return APIKey;
  }

  constructor() {
    this.client = new BackboardClient({ apiKey: this.getEnvValue("BACKBOARD_API_KEY") });
    this.assistantID = this.getEnvValue("BACKBOARD_ASSISTANT_ID");
  }
}

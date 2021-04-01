export class ShowNotificationAction {
  static readonly type = '[NOTIFICATION] Show';

  constructor(
    public message: string,
    public action: string,
    public duration: number
  ) {}
}

export interface NotificationStateModel {
  message: String;
  action: String;
  duration: number;
}

export const defaultNotificationState: NotificationStateModel = {
  message: '',
  action: 'Ok',
  duration: 2000,
};

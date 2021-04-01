import { State, Action, StateContext } from '@ngxs/store';
import {
  NotificationStateModel,
  defaultNotificationState,
} from './notification.model';
import { ShowNotificationAction } from './notification.actions';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@State<NotificationStateModel>({
  name: 'notificationState',
  defaults: defaultNotificationState,
})
@Injectable()
export class NotificationState {
  constructor(private snackbar: MatSnackBar) {}

  @Action(ShowNotificationAction)
  showNotification(
    { patchState }: StateContext<NotificationStateModel>,
    { message, action, duration }: ShowNotificationAction
  ) {
    patchState({ message, action, duration });
    this.snackbar.open(message, action, {
      duration,
    });
  }
}

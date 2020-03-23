import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SelectBoxItem, DefaultClient } from 'src/constants';

interface Client {
  id:number;
  name:string;
}

@Component({
  selector: 'app-client-picker',
  templateUrl: './client-picker.component.html',
  styleUrls: [ './client-picker.component.less' ]
})
export class ClientPickerComponent {

  @Input() selectedClient = DefaultClient;
  @Output() clientChanged = new EventEmitter<number>();

  // TODO: This needs to be externally sourced
  clients:Client[] = [
    { id: 60, name: 'Live' },
    { id: 61, name: 'Sandbox' },
    { id: 0, name: 'Community Sift' }
  ]

  selectBoxList: SelectBoxItem[] = this.clients.map(client => ({
    content: client.name,
    value: client.id
  }))

  constructor () { }

  onClientChanged (selectedValue: number) {
    this.clientChanged.emit(selectedValue);
  }

}

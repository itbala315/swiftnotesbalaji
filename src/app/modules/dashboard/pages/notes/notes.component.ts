import { Component, OnInit } from '@angular/core';
import { Nft } from '../../models/note';

@Component({
  selector: 'app-nft',
  templateUrl: './notes.component.html',
})
export class NftComponent implements OnInit {
  nft: Array<Nft>;

  constructor() {
    this.nft = [
      {
       title: 'Girls of the Cartoon Universe',
        notes:''
      },
      {
       title: 'Pupaks',
        notes:''
      },
      {
        title: 'Seeing Green collection',
        notes:''
      },
    ];
  }

  ngOnInit(): void {}
}

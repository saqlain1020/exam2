import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
// export class AppService implements OnInit  {
export class AppService {
  orders: any[] = []
  constructor(private db: AngularFirestore) {
    db.collection("orders").get().toPromise().then(querySnapshop=>{
      querySnapshop.forEach((doc)=>{
        this.orders.push(doc.data())
      })
    })
  }
  // ngOnInit(private db: AngularFirestore){
  //   AngularFirestore.
  // }
}

import {action, computed , observable} from 'mobx';


class AppState {
@observable timeinHr = 0;
@observable timeinMin = 0;
@observable timeinSec = 0;
@observable timeinMiliSec = 0;

@observable intervalID;
@observable intervalID2;
@observable intervalID3;
@observable intervalID4;
@observable count = 0;


 @action  lapGetter () {
      this.intervalID4;
}

  @action startTimer() {
    if(this.count === 0) {
    this.count = 1;

    this.intervalID = setInterval(() => {
        if(this.timeinHr >= 24) {
        this.timeinHr =0;
       }
      this.timeinHr += 1}, 1000 * 60 * 60);

      this.intervalID2 = setInterval(() => {
      if(this.timeinMin < 60) {
        this.timeinMin =0;
             } this.timeinMin += 1; }, 1000 * 60 );

      this.intervalID3 = setInterval(() => {
      if(this.timeinSec >= 60) {
        this.timeinSec =0;
        }
       this.timeinSec += 1;
        }, 1000 );

        this.intervalID4 = setInterval(() => {
      if(this.timeinMiliSec >= 100) {
        this.timeinMiliSec =0;
        }
       this.timeinMiliSec += 1;
        }, 10 );
    }
  }
  

 @action resetTimer() {
this.count= 0;
    this.timeinHr =0;   this.timeinMin = 0;  this.timeinSec =0; this.timeinMiliSec = 0;
   clearInterval(this.intervalID)
  clearInterval(this.intervalID2)
    clearInterval(this.intervalID3)
    clearInterval(this.intervalID4)

  }

 @action stopTimer(){
    this.count= 0;
clearInterval(this.intervalID)
  clearInterval(this.intervalID2)
    clearInterval(this.intervalID3)
    clearInterval(this.intervalID4)
}



}

export default AppState;

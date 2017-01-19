'use strict';

var mongoose = require('mongoose');
mongoose.connect('mongodb://ramadan:ramadan@ds117899.mlab.com:17899/ramadan',{ config: { autoIndex: false } });
var Prieres = require('./prieres');

var tab_prieres = [{"Date":" 6 juin","Sobh":"03:23","Chorouq":"05:46","Dohr":"13:49","Asr":"18:05","Maghreb":"21:52","Icha":"00:06","Rakas":"10","Sourates":"1 Fatiha + 2 Inna Anzalnahou + 2 Khoul Ya Ayouhal Kafirouna + 2 Ikhlass"},
    {"Date":" 7 juin","Sobh":"03:23","Chorouq":"05:45","Dohr":"13:49","Asr":"18:05","Maghreb":"21:53","Icha":"00:06","Rakas":"6","Sourates":"1 Fatiha + 10 Inna Ahtaynakal"},
    {"Date":" 8 juin","Sobh":"03:23","Chorouq":"05:45","Dohr":"13:49","Asr":"18:06","Maghreb":"21:53","Icha":"00:06","Rakas":"6","Sourates":"1 Fatiha + 4 Inna Anzalnahou + 4 Khoul Ya Ayouhal Kafirouna"},
    {"Date":" 9 juin","Sobh":"03:23","Chorouq":"05:45","Dohr":"13:49","Asr":"18:06","Maghreb":"21:54","Icha":"00:07","Rakas":"4","Sourates":"1 Fatiha + 3 Khoul Ya Ayouhal Kafirouna"},
    {"Date":" 10 juin","Sobh":"03:23","Chorouq":"05:44","Dohr":"13:50","Asr":"18:06","Maghreb":"21:55","Icha":"00:07","Rakas":"4","Sourates":"1 Fatiha + 1 Alam Nasra + 3 Ikhlass"},
    {"Date":" 11 juin","Sobh":"03:23","Chorouq":"05:44","Dohr":"13:50","Asr":"18:07","Maghreb":"21:55","Icha":"00:08","Rakas":"2","Sourates":"1 Fatiha + 12 Ikhlass"},
    {"Date":" 12 juin","Sobh":"03:23","Chorouq":"05:44","Dohr":"13:50","Asr":"18:07","Maghreb":"21:56","Icha":"00:08","Rakas":"6","Sourates":"1 Fatiha + 7 Khoul Ya Ayouhal Kafirouna + 7 Ikhlass"},
    {"Date":" 13 juin","Sobh":"03:23","Chorouq":"05:44","Dohr":"13:50","Asr":"18:07","Maghreb":"21:57","Icha":"00:08","Rakas":"2","Sourates":"1 Fatiha + 12 Ikhlass"},
    {"Date":" 14 juin","Sobh":"03:23","Chorouq":"05:44","Dohr":"13:50","Asr":"18:08","Maghreb":"21:57","Icha":"00:09","Rakas":"4","Sourates":"1 Fatiha + 3 Tabat Yada + 1 Ikhlass"},
    {"Date":" 15 juin","Sobh":"03:23","Chorouq":"05:44","Dohr":"13:51","Asr":"18:08","Maghreb":"21:58","Icha":"00:09","Rakas":"4","Sourates":"1 Fatiha + 1 Ayatoul Koursiyou + 12 Inna Anzalnahou"},
    {"Date":" 16 juin","Sobh":"03:24","Chorouq":"05:44","Dohr":"13:51","Asr":"18:08","Maghreb":"21:58","Icha":"00:09","Rakas":"4","Sourates":"1 Fatiha + 7 Inna Anzalnahou + 7 Khoul Ya Ayouhal Kafirouna + 7 Ikhlass"},
    {"Date":" 17 juin","Sobh":"03:24","Chorouq":"05:44","Dohr":"13:51","Asr":"18:08","Maghreb":"21:58","Icha":"00:10","Rakas":"10","Sourates":"1 Fatiha + 6 Ikhlass"},
    {"Date":" 18 juin","Sobh":"03:24","Chorouq":"05:44","Dohr":"13:51","Asr":"18:09","Maghreb":"21:59","Icha":"00:10","Rakas":"2","Sourates":"1 Fatiha + 5 Ikhlass"},
    {"Date":" 19 juin","Sobh":"03:24","Chorouq":"05:44","Dohr":"13:52","Asr":"18:09","Maghreb":"21:59","Icha":"00:10","Rakas":"8","Sourates":"1 Fatiha + 7 Iza Diaha"},
    {"Date":" 20 juin","Sobh":"03:24","Chorouq":"05:44","Dohr":"13:52","Asr":"18:09","Maghreb":"21:59","Icha":"00:10","Rakas":"6","Sourates":"1 Fatiha + 1 Iza Diaha + 35 Ikhlass"},
    {"Date":" 21 juin","Sobh":"03:24","Chorouq":"05:44","Dohr":"13:52","Asr":"18:09","Maghreb":"21:59","Icha":"00:11","Rakas":"2","Sourates":"1 Fatiha + 10 Iza Zoulzilati"},
    {"Date":" 22 juin","Sobh":"03:25","Chorouq":"05:45","Dohr":"13:52","Asr":"18:10","Maghreb":"22:00","Icha":"00:11","Rakas":"12","Sourates":"1 Fatiha + 2 Inna Anzalnahou + 2 Ikhlass"},
    {"Date":" 23 juin","Sobh":"03:25","Chorouq":"05:45","Dohr":"13:52","Asr":"18:10","Maghreb":"22:00","Icha":"00:11","Rakas":"10","Sourates":"1 Fatiha + 1 Sabihis ma Rabika + 1 Khoul Ya Ayouhal Kafirouna +1 Ikhlass"},
    {"Date":" 24 juin","Sobh":"03:25","Chorouq":"05:45","Dohr":"13:53","Asr":"18:10","Maghreb":"22:00","Icha":"00:11","Rakas":"6","Sourates":"1 Fatiha + 7 Ikhlass"},
    {"Date":" 25 juin","Sobh":"03:25","Chorouq":"05:46","Dohr":"13:53","Asr":"18:10","Maghreb":"22:00","Icha":"00:11","Rakas":"8","Sourates":"1 Fatiha + 1 Inna Anzalnahou + 3 Ikhlass"},
    {"Date":" 26 juin","Sobh":"03:26","Chorouq":"05:46","Dohr":"13:53","Asr":"18:10","Maghreb":"22:00","Icha":"00:11","Rakas":"4","Sourates":"1 Fatiha + 20 Ikhlass"},
    {"Date":" 27 juin","Sobh":"03:26","Chorouq":"05:47","Dohr":"13:53","Asr":"18:10","Maghreb":"22:00","Icha":"00:12","Rakas":"2","Sourates":"1 Fatiha + 3 Sabihis ma Rabika + 3 Inna Anzalnahou + 3 Ikhlass + Falakhi + 3 Nassi"},
    {"Date":" 28 juin","Sobh":"03:26","Chorouq":"05:47","Dohr":"13:53","Asr":"18:10","Maghreb":"22:00","Icha":"00:12","Rakas":"4","Sourates":"1 Fatiha + 5 Iza Diaha + 5 Ikhlass"},
    {"Date":" 29 juin","Sobh":"03:27","Chorouq":"05:48","Dohr":"13:54","Asr":"18:11","Maghreb":"22:00","Icha":"00:12","Rakas":"6","Sourates":"1 Fatiha + 3 Ikhlass"},
    {"Date":" 30 juin","Sobh":"03:27","Chorouq":"05:48","Dohr":"13:54","Asr":"18:11","Maghreb":"21:59","Icha":"00:12","Rakas":"8","Sourates":"1 Fatiha + 4 Ikhlass"},
    {"Date":" 01 juillet","Sobh":"03:27","Chorouq":"05:49","Dohr":"13:54","Asr":"18:11","Maghreb":"21:59","Icha":"00:12","Rakas":"10","Sourates":"1 Fatiha + 1 Al Khariatou + 5 Ikhlass (+ Demander Pardon à DIEU après salut final"},
    {"Date":" 02 juillet","Sobh":"03:28","Chorouq":"05:50","Dohr":"13:54","Asr":"18:11","Maghreb":"21:59","Icha":"00:12","Rakas":"12","Sourates":"1 Fatiha + 10 Inna Anzalnahou"},
    {"Date":" 03 juillet","Sobh":"03:28","Chorouq":"05:50","Dohr":"13:54","Asr":"18:11","Maghreb":"21:58","Icha":"00:12","Rakas":"4","Sourates":"1 Fatiha + 5 Watini + 5 Khoul Ayouhal Kafirouna + 5 Ikhlass (+Demander Pardon)"},
    {"Date":" 04 juillet","Sobh":"03:29","Chorouq":"05:51","Dohr":"13:55","Asr":"18:11","Maghreb":"21:58","Icha":"00:12","Rakas":"4","Sourates":"1 Fatiha + 5 Watini + 5 Khoul Ayouhal Kafirouna + 5 Ikhlass (+Demander Pardon)"},
    {"Date":" 05 juillet","Sobh":"03:29","Chorouq":"05:52","Dohr":"13:55","Asr":"18:11","Maghreb":"21:58","Icha":"00:11","Rakas":"6","Sourates":"1 Fatiha + 11 Ikhlass (Si le croissant n'est pas apparu)"}
];

for (let i = 0 ; i < tab_prieres.length ; i++){
    let  priere = new Prieres({
        Date: tab_prieres[i].date,
        Sobh: tab_prieres[i].Sobh,
        Chorouq: tab_prieres[i].Chorouq,
        Dohr : tab_prieres[i].Dohr,
        Asr : tab_prieres[i].Asr,
        Maghreb: tab_prieres[i].Maghreb
    });
    priere.save(function (err,priere) {
        if(err){
            console.log(err);
        }else{
            if(priere){
                console.log('priere created '+ priere);
            }else{
                console.log(' impossible de creer la priere')
            }
        }
    });

}

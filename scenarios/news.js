import http from 'k6/http';
import { sleep } from 'k6';
import { check, fail } from "k6";

export default function () {
    let res = http.get('https://test.k6.io/news.php')
    
    let durationMsg = 'Falha na execução do cenário de teste news'

    if(!check(res, {
        'is statuscode 200 - endpoint news': (r) => r.status === 200
    })){
        fail(durationMsg);
    }
    
    sleep(1);

}



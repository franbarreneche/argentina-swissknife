import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';

@Injectable()
export class UsdStoreService {

  constructor(private readonly http: HttpClient) { }

  public getUsdLast7DaysPrice(): Observable<any> | null {
    const endpoint = '';
    return null;
  }

  public getActualUsdPrices(): Observable<{ oficial: { price: number, variation: string }, blue: { price: number, variation: string }, mep: { price: number, variation: string }, ccl: { price: number, variation: string } }> {
    const endpoint = 'https://www.dolarsi.com/api/api.php?type=valoresprincipales';
    // return this.http.get<any>(endpoint).pipe(
    return of(actualUsdPricesTestData).pipe(
      map((data: any[]) => {
        const blue = data.find(x => x.casa.nombre === 'Dolar Blue')!.casa;
        const oficial = data.find(x => x.casa.nombre === 'Dolar Oficial')!.casa;
        const mep = data.find(x => x.casa.nombre === 'Dolar Bolsa')!.casa;
        const ccl = data.find(x => x.casa.nombre === 'Dolar Contado con Liqui')!.casa;
        return {
          blue: {
            price: Number.parseFloat(blue.venta),
            variation: blue.variacion,
          },
          oficial: {
            price: Number.parseFloat(oficial.venta),
            variation: oficial.variacion,
          },
          mep: {
            price: Number.parseFloat(mep.venta),
            variation: mep.variacion,
          },
          ccl: {
            price: Number.parseFloat(ccl.venta),
            variation: ccl.variacion,
          },
        }
      })
    );
  }
}

const actualUsdPricesTestData = [
  {
    "casa": {
      "compra": "268,33",
      "venta": "278,33",
      "agencia": "349",
      "nombre": "Dolar Oficial",
      "variacion": "0,20",
      "ventaCero": "TRUE",
      "decimales": "2"
    }
  },
  {
    "casa": {
      "compra": "520,00",
      "venta": "525,00",
      "agencia": "310",
      "nombre": "Dolar Blue",
      "variacion": "2,54",
      "ventaCero": "TRUE",
      "decimales": "2"
    }
  },
  {
    "casa": {
      "compra": "No Cotiza",
      "venta": "0",
      "agencia": "311",
      "nombre": "Dolar Soja",
      "variacion": "0",
      "ventaCero": "TRUE",
      "decimales": "3"
    }
  },
  {
    "casa": {
      "compra": "490,68",
      "venta": "520,10",
      "agencia": "312",
      "nombre": "Dolar Contado con Liqui",
      "variacion": "5,87",
      "ventaCero": "TRUE",
      "decimales": "2"
    }
  },
  {
    "casa": {
      "compra": "493,840",
      "venta": "492,920",
      "agencia": "313",
      "nombre": "Dolar Bolsa",
      "variacion": "-0,130",
      "ventaCero": "TRUE",
      "decimales": "3"
    }
  },
  {
    "casa": {
      "compra": "9.852,070",
      "venta": "0",
      "agencia": "399",
      "nombre": "Bitcoin",
      "variacion": "-100,00",
      "ventaCero": "TRUE",
      "decimales": "3"
    }
  },
  {
    "casa": {
      "nombre": "Dolar turista",
      "compra": "No Cotiza",
      "venta": "487,08",
      "agencia": "406",
      "variacion": "0,20",
      "ventaCero": "TRUE",
      "decimales": "2"
    }
  },
  {
    "casa": {
      "compra": "261,55",
      "venta": "277,57",
      "agencia": "302",
      "nombre": "Dolar",
      "decimales": "3"
    }
  },
  {
    "casa": {
      "nombre": "Argentina",
      "compra": "2.010,00",
      "venta": "0,25",
      "mejor_compra": "True",
      "mejor_venta": "False",
      "fecha": "05\/05\/15",
      "recorrido": "16:30",
      "afluencia": {

      },
      "agencia": "141",
      "observaciones": {

      }
    }
  }
];

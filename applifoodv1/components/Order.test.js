import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { waitFor, screen } from '@testing-library/react';
import Orders from './Order';
import ModalInput from './ModalInput';
import '@testing-library/jest-dom'
import fetch from 'node-fetch';
import DashboardUI from './DashboardUI';
import { Render } from '../utils/tests';


const arrayTestOrder=
[ {id: 1, 
    title: "Délices d'ailleurs", 
  idReceip: "#CB57893", 
  services: "uber-eats", 
  status: "Livrer",
  hourReceivCommand:"27/04/2023",
  details:[{
    dataDetails:"27/04/2023",
    dataName:"Sandwich poisson",
    dataStatus:"d",
    dataUpgradeStatus:"Livrer",
  },
]

},{id: 2, 
    title: "MyFrench Cantine", 
  idReceip: "#CB57893", 
  services: "deliveroo-logo", 
  status: "En cours",
  hourReceivCommand:"28/04/2023",
  details:[{
    dataDetails:"28/04/2023",
    dataName:"pâtes carbonara",
    dataStatus:"Livrer",
    dataUpgradeStatus:"en cours",
  },
  
]

},{id: 3, 
    title: "Bendjab", 
  idReceip: "#CB57893", 
  services: "just-eat", 
  status: "Annuler",
  hourReceivCommand:"28/04/2023",
  details:[{
    dataDetails:"28/04/2023",
    dataName:"poulet riz curry",
    dataStatus:"Livrer",
    dataUpgradeStatus:"en cours",
  },
  
]

}]


const server = setupServer(
    rest.get("https://dummyjson.com/products",(req,res,ctx)=>{
        return res(ctx.status(200),
        ctx.json([ {id: 1, 
            title: "Délices d'ailleurs", 
         
        
        },{id: 2, 
            title: "MyFrench Cantine", 
         
        
        },{id: 3, 
            title: "Bendjab", 
          
        }]))
    })
)


// Active la simulation d'API avant les tests depuis server
beforeAll(() => server.listen())
// Réinitialise tout ce qu'on aurait pu ajouter en termes de durée pour nos tests avant chaque test
afterEach(() => server.resetHandlers())
// Ferme la simulation d'API une fois que les tests sont finis
afterAll(() => server.close())


test('Should display Orders Restaurant', async () => {
    Render(<Orders/>)
           
    expect(screen.getByTestId('loadingDiv')).toBeTruthy()
   /* await waitFor(()=>{
        
        expect(screen.getByText('Bendjab')).toBeTruthy()

    })*/
   
})
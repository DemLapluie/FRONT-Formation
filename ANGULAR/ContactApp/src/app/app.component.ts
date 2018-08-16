/**
 * Pour déclarer une classe comme composant de
 * notre application, on importe "Component"
 * via @angular/core.
 */
import {Component, OnInit} from '@angular/core';
import {Contact} from './shared/models/contact';
import {UserAPIService} from './shared/services/user/user-api.service';

/**
 * @Component est ce qu'on appelle un décorateur.
 * Il va nous permettre de définir 3 paramètres
 * essentiels à notre application...
 */
@Component({
  /**
   * Le sélecteur (selector) détermine la
   * manière dont le composant sera affiché
   * dans notre HTML : <app-root></app-root>.
   * Vous devez OBLIGATOIREMENT avoir la balise
   * d'ouverture et de fermeture !
   */
  selector: 'app-root',
  /**
   * "templateUrl" ou "template" est la
   * partie visible du composant. C'est
   * ce qui s'affiche à l'écran lorsque
   * le composant est utilisé.
   */
  templateUrl: './app.component.html',
  /**
   * La déclaration des Styles avec
   * "styleUrls" ou "styles[]"
   */
  styleUrls: ['./app.component.css'],
  /*template: `
    <h1>Bienvenue à Paris IV !</h1>
    <h3>Les meilleurs à RISK et PUBG...</h3>
    <p>Les apprenants sont entrain de souffrir avec Hugo !</p>
  `,
  styles: [`
    h1 {
      color: blue;
    }
  `]*/
})

/**
 * La classe contient les données du composant,
 * mais aussi son comportement.
 * Dans notre contexte MVVM, notre classe
 * correspond au ViewModel.
 */
export class AppComponent implements OnInit {


  // -- Déclaration d'une variable titre
  title = 'Contact App';

  // -- Contact choisi par mon utilisateur
  contactActif: Contact;

  // -- Déclaration d'un Objet Contact
  unContact = {
    id: 1,
    name: 'Hugo LIEGEARD',
    username: 'hugoliegeard',
    email: 'wf3@hl-media.fr'
  };

// -- Tableau de Contacts

  mesContacts: Contact[] = [
    {
      id: 1,
      name: 'Demmy ONDEE',
      username: 'DemLapluie',
      email: 'demmyondee@gmail.com',
    },
    {
      id: 2,
      name: 'Riki NDINGA',
      username: 'rikindinga',
      email: 'rikn@gmail.com',
    },
    {
      id: 3,
      name: 'unknownid',
      username: 'unknownname',
      email: 'unknown@gmail.com',
    },
    {
      id: 4,
      name: 'Julien CALCERRADA',
      username: 'juliencalcerrada',
      email: 'julien.c@hl-media.fr',
    },
  ];

  /**
   * Ma fonction displayContact, prend un Contact
   * en paramètre et le transmet a la variable
   * contactActif.
   * @param {Contact} contactcliqueParMonUtilisateur
   */

  displayContact(contactcliqueParMonUtilisateur: Contact) {
    this.contactActif = contactcliqueParMonUtilisateur;
    console.log(this.contactActif);
  }


ajouterContactDansListe(event: any ) {

//  -- Aperçu dans la console
  console.log(event);

//  -- Récupération du Contact dans l'évènement
  const leContact: Contact = event.leContact;

//  -- Ajout du Contact dans le tableau
  this.mesContacts.push(leContact);
  }

  constructor(private userApiService: UserAPIService) {}

  ngOnInit(): void {
    this.userApiService.getUsers().subscribe(
      contacts => {
        console.log(contacts);
        this.mesContacts = contacts;
      }
    );
  }

}

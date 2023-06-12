//Source code
import '@fortawesome/fontawesome-free/css/all.css'; //import fontawesome
import Modal from './components/Modal';
import IdeaForm from './components/IdeaForm';
import IdeaList from './components/IdeaList';
import './css/style.css';

//Instantiate Modal class
new Modal();

//Instantiate ideaForm class
const ideaForm = new IdeaForm();
ideaForm.render();

new IdeaList();

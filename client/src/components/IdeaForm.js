import IdeasApi from '../api-services/ideasApi';
import IdeaList from './IdeaList';

//Form insidew modal to create new idea-- render html for form & handle submission, and will prefill with username
class IdeaForm {
  constructor() {
    //select the modal\
    this._formModal = document.querySelector('#form-modal'); //insert html
    this._ideaList = new IdeaList();
  }

  // Add Event Listners
  addEventListeners() {
    this._form.addEventListener('submit', this.handleSubmit.bind(this));
    //acces text
  }

  async handleSubmit(e) {
    e.preventDefault();

    if (
      !this._form.elements.text.value ||
      !this._form.elements.tag.value ||
      !this._form.elements.username.value
    ) {
      alert('Please enter all field!');
      return;
    }

    // Save user to local storage
    localStorage.setItem('username', this._form.elements.username.value);

    //get input text
    const idea = {
      text: this._form.elements.text.value,
      tag: this._form.elements.tag.value,
      username: this._form.elements.username.value,
    };
    // Add idea to server
    const newIdea = await IdeasApi.createIdea(idea);

    // Add idea to list
    this._ideaList.addIdeaToList(newIdea.data.data);

    //Clear fields after submit
    this._form.elements.text.value = '';
    this._form.elements.tag.value = '';
    this._form.elements.username.value = '';

    this.render();

    document.dispatchEvent(new Event('closeModal'));
  }

  //Similar to React's render!
  render() {
    this._formModal.innerHTML = `
        <form id="idea-form">
          <div class="form-control">
            <label for="idea-text">Enter a Username</label>
            <input type="text" name="username" id="username" value="${
              localStorage.getItem('username')
                ? localStorage.getItem('username')
                : ''
            }"/>
          </div>
          <div class="form-control">
            <label for="idea-text">What's Your Idea?</label>
            <textarea name="text" id="idea-text"></textarea>
          </div>
          <div class="form-control">
            <label for="tag">Tag</label>
            <input type="text" name="tag" id="tag" />
          </div>
          <button class="btn" type="submit" id="submit">Submit</button>
        </form>
        `;
    this._form = document.querySelector('#idea-form');
    this.addEventListeners();
  }
}

export default IdeaForm;

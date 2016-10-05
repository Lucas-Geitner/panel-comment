'use babel';

export default class PanelCommentView {

  constructor(serializedState) {
    // Create root element
    this.element = document.createElement('div');
    this.element.classList.add('panel-comment');

    // Create message element
    const message = document.createElement('div');
    message.textContent = 'Code comment!';
    message.classList.add('message');
    this.element.appendChild(message);
    const hr = document.createElement('hr');
    this.element.appendChild(hr);
    var editor = atom.workspace.getActiveTextEditor();
    var full_text = document.createElement('div');
    var  words = editor.getText();
    full_text.textContent = words;
    this.element.appendChild(hr);
    this.element.appendChild(full_text);
  }

  // Returns an object that can be retrieved when package is activated
  serialize() {}

  // Tear down any state and detach
  destroy() {
    this.element.remove();
  }

  getElement() {
    return this.element;
  }

}

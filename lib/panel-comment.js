'use babel';

import PanelCommentView from './panel-comment-view';
import { CompositeDisposable } from 'atom';

export default {

  panelCommentView: null,
  modalPanel: null,
  rightPanel: null, // Add a right Panel
  subscriptions: null,
  activate(state) {
    this.panelCommentView = new PanelCommentView(state.panelCommentViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.panelCommentView.getElement(),
      visible: false
    });
    this.rightPanel = atom.workspace.addRightPanel({
      item: this.panelCommentView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'panel-comment:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.panelCommentView.destroy();
  },

  serialize() {
    return {
      panelCommentViewState: this.panelCommentView.serialize()
    };
  },

  toggle() {
    console.log('PanelComment was toggled!');
    return (
      // this.modalPanel.isVisible() ?
      // this.modalPanel.hide() :
      // this.modalPanel.show()
      this.rightPanel.isVisible() ?
      this.rightPanel.hide() :
      // editor = atom.workspace.getActiveTextEditor()
      // words = editor.getText()
      this.rightPanel.show()
    );
  }

};

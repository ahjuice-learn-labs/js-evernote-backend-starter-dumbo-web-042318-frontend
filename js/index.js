document.addEventListener('DOMContentLoaded', () => {
  renderNoteList()


});

function renderNotePreview(note) {
  const noteList = document.querySelector('#note-list');
  const li = document.createElement('li');
  li.innerHTML = note.body;
  noteList.appendChild(li);
};

function renderNoteList() {
  let user = Adapter.getUser(1);
  let userNotes = user.then(r => r.notes)
  userNotes.then(notes => notes.forEach(note => {
    renderNotePreview(note)
  }))
};

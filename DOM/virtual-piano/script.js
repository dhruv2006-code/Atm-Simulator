let keys = document.querySelectorAll('.key');
let sound = {
    a:"a.mp3",
    s:"s.mp3",
    d:"d.mp3",
    f:"f.mp3",
    g:"g.mp3",
    h:"h.mp3",
    j:"j.mp3",
    k:"k.mp3"
}
window.addEventListener('keydown',function(elem){
   let note = elem.key;
// upper line will give you the word which will be saved in note variable
   if(sound[note]){
    // this condition verifies that if your pressed existed in sound object
    let audio = new Audio(sound[note]);
    // it will make sure that the exact key pressed should play correct vocal
    audio.play();
   }
})
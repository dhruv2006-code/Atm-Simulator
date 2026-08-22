let keys = document.querySelectorAll('.key')
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

        if(sound[note]){
            let audio = new Audio (sound[note])
            audio.play()
        }
   })

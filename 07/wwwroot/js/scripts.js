function scrollToEnd(el) {
    setTimeout(() => el.scrollTo(0, el.scrollHeight + 100), 10);
}

function setTileAt(id, filename)
{
    let el = document.getElementById(id);
    el.src = filename;
}

function focusInput()
{
    setTimeout(() =>
    {
        try{
            document.getElementById("user-input").focus();
        }
        catch(error) {}
    }, 250)
}

function setVolume(id, volume)
{
    let player = document.getElementById(id);
    console.log(player);
    player.volume = volume;
}

function playAudio(id, filename, loop)
{
    let player = document.getElementById(id);
    player.src = filename;
    player.loop = loop
    player.play();
}

function stopAudio(id, filename)
{
    let player = document.getElementById(id);
    player.pause();
    player.currentTime = 0;
}
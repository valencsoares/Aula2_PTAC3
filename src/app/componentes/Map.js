export default function Map(){
    return (
        <iframe
          style={{marginTop: 150}}
          id="gmap_canvas"
          src={"https://maps.google.com/maps?       q=Nova%20Andradina%20+IFMS+&t=&z=13&ie=UTF8&iwloc=&output=embed"}
          frameborder="0" scrolling="no"
          marginheight="0"
          marginwidth="0"
          width={1490}
          height={300}>
        </iframe>
    )
}
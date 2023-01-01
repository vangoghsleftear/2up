import './App.css'

function App() {

  return (
    <div className="container max-w-7xl mx-auto p-4">
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6'>
        <ImageWithLink
          imageUrl="https://content.asos-media.com/-/media/homepages/ww/2022/december/19-gbl/moments/ww_global_new-trals_moment_870x1110.jpg"
          title="NEW-TRIALS"
          subTitle="Team tonal 4eva"
          url="https://google.com"
        />
        <ImageWithLink
          imageUrl="https://content.asos-media.com/-/media/homepages/ww/2022/december/19-gbl/moments/ww_maxi_dress.jpg"
          title="BB IT'S BOLD OUTSIDE"
          subTitle="Spotlight on Y-O-U"
          url="https://google.com"
        />
        <ImageWithLink
          imageUrl="https://content.asos-media.com/-/media/homepages/ww/2022/december/19-gbl/moments/ww_global_asos_4505_ski_moment_870x1110.jpg"
          title="SWOOSH-SWOOSH"
          subTitle="Apres all day"
          url="https://google.com"
        />
        <ImageWithLink
          imageUrl="https://content.asos-media.com/-/media/homepages/ww/2022/december/19-gbl/moments/ww_global_new-trals_moment_870x1110.jpg"
          title="GROWN ALCHEMIST"
          subTitle="Skincare saviours"
          url="https://google.com"
        />
      </div>
    </div>
  )
}

export default App



type ImageWithLinkProps = {
  imageUrl: string,
  title: string,
  subTitle: string,
  url: string,
};

const ImageWithLink: React.FC<ImageWithLinkProps> = ({ imageUrl, subTitle, title, url }) => {
  return (
    <div className="w-full ">
      <a href={url} className=''>
        <img src={imageUrl} className="w-full " />
        <p className="text-center mt-3 font-bold text-sm lg:text-lg">{title}</p>
        <p className="text-center mt-1 text-sm lg:text-base">{subTitle}</p>
      </a>
    </div>
  );
}

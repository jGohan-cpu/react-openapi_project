import { logo } from '../assets'

const Hero = () => {
    return (
        <header className="w-full flex justify-center items-center flex-col">
            <nav className="flex justify-between items-center w-full mb-10 pt-3">
                <img src={logo} alt="alt logo" className="w-28 object-contain" />
                <button
                    type="button"
                    onClick={() => window.open('https://github.com/jGohan-cpu')}
                    className="black_btn"
                >
                    GitHub
                </button>
            </nav>

            <h1 className="head_text">
                Summarize Articles with <br className="max-md:hidden" />
                <span className="orange_gradient">OpenAI GPT-4</span>
            </h1>
            <h2 className="desc">
                Test the Summarizer API by entering any article to
                transform it into a simpler summary.
            </h2>
        </header>
    )
}

export default Hero
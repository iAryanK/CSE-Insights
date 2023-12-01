import Feed from "@components/Feed"

const Home = () => {
    return (
        <section className="w-full flex-center flex-col">
            <h1 className="head_text text-center">Discover and Share &nbsp;
                <br className="max-md:hidden" />
                <span className="orange_gradient text-center">Deep CSE Insights</span>
            </h1>
            <p className="desc text-center">Unlock the Power of Computer Science & Engineering • CSE Insights - Your Gateway to Practical Tips, Proven Strategies, and College life stories.</p>

            {/* Feed  */}
            <Feed />
        </section>
    )
}

export default Home
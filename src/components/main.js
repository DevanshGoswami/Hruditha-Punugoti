import Form from "./form"
import Pictures from "./pictures"
import Logo from '../images/hptardisblue.png';

export const Main = () => {
    return(
        <>
        <body class="is-preload">
		{/* <!-- Wrapper --> */}
			<div id="wrapper">

				{/* <!-- Header --> */}
					<header id="header">
						<div class="inner">

							{/* <!-- Logo --> */}
								<a href="/" class="logo">
								<span class="symbol"><img src={Logo} alt="" /></span><span class="title">hptardisblue</span>
								</a>

						</div>
					</header>

			

				{/* <!-- Main --> */}
					<div id="main">
						<div class="inner">
							<header>
								<h1>Hey! I’m Hruditha Punugoti.</h1>
								<p>I’m a student at Vellore Institute of Technology, India. I am currently majoring in Computer Science and Engineering and am interested in entrepreneurship and marketing. This website focuses on showing you the method of photography that I relate with, it’s called <strong>“a snapshot of time”</strong> - I like to call it art. Art is subjective, no?
                               </p>
							</header>
						<Pictures/>
						</div>
					</div>

				{/* <!-- Footer --> */}
					<footer id="footer">
						<div class="inner">
							<section>
								<h2>Get in touch</h2>
								<Form/>
							</section>
							<section>
								<h2>Follow</h2>
								<ul class="icons">
									<li><a href="https://mobile.twitter.com/HruditaP" class="icon brands style2 fa-twitter"><span class="label">Twitter</span></a></li>
									<li><a href="https://www.linkedin.com/in/hrudita-punugoti/" class="icon brands style2 fa-linkedin"><span class="label">Facebook</span></a></li>
									<li><a href="https://instagram.com/hruditapunugoti?igshid=1i4mkbo4rcu54" class="icon brands style2 fa-instagram"><span class="label">Instagram</span></a></li>
								</ul>
							</section>
							<ul class="copyright">
								<li>&copy; Hruditha Punugoti. All rights reserved</li><li>Design: <a href="http://devanshgoswami.tech/">Devansh Goswami</a></li>
							</ul>
						</div>
					</footer>

			</div>


	</body>
        </>
    );
}
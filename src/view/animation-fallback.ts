import './animation.css';

document.addEventListener( 'DOMContentLoaded', () => {
	const elements = document.querySelectorAll< HTMLElement >(
		'[data-animation][data-animation-mode="once"]'
	);

	const observer = new IntersectionObserver( ( entries, obs ) => {
		entries.forEach( ( entry ) => {
			if ( entry.isIntersecting ) {
				entry.target.classList.add( 'is-visible' );
				obs.unobserve( entry.target );
			}
		} );
	} );

	elements.forEach( ( el ) => observer.observe( el ) );
} );

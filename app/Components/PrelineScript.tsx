"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const isBrowser = typeof window !== undefined;

export default function PrelineLoader() {
	const path = usePathname();

	useEffect(() => {
		if (isBrowser) {
			// if this component is rendered on a browser, import preline
			import("preline/preline");
		}
	}, []);

	useEffect(() => {
		setTimeout(() => {
			if (isBrowser) {
				// if this component is rendered on a browser, import relevant preline plugins
				import("preline/preline").then(
					({ HSAccordion, HSDropdown, HSCollapse }) => {
						HSAccordion.autoInit();
						HSDropdown.autoInit();
						HSCollapse.autoInit();
					}
				);
			}
		}, 100);
	}, [path]);

	return <></>;
}

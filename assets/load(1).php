/* Isolation to fix references in case of RTL words at the end of a reference */
sup.reference {
	unicode-bidi: -moz-isolate;
	unicode-bidi: -webkit-isolate;
	unicode-bidi: isolate;
}
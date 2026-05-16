// Package runspec provides Go language support for runspec.
//
// Status: Planned. Stub only.
//
// Will implement the same interface as runspec-python, providing
// native Go types from a runspec.toml spec. All integration
// fixtures in tests/integration/fixtures/ must pass.
package runspec

import "errors"

// Parse reads the runspec config and parses os.Args.
// Not yet implemented.
func Parse() error {
	return errors.New("runspec-go is not yet implemented")
}

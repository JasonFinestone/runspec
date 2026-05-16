"""
runspec — A language-agnostic, TOML-based interface specification
for anything runnable.

Public API:
    parse()         → RunSpec   Parse arguments for the calling script
    load_spec()     → RunSpec   Load spec without parsing argv
    register_type() → None      Register a custom type coercer
"""

from runspec.parser import parse, load_spec
from runspec.types import register_type
from runspec.models import RunSpec, Arg, Group

__version__ = "0.1.0"
__all__ = [
    "parse",
    "load_spec",
    "register_type",
    "RunSpec",
    "Arg",
    "Group",
]

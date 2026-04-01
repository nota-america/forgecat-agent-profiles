"""
Scripts Module

Collection of MCP scripts and Agentica agents.
"""

# Lazy import to avoid circular import issues
def __getattr__(name):
    if name == "workflow_erotetic":
        from scripts import workflow_erotetic
        return workflow_erotetic
    raise AttributeError(f"module 'scripts' has no attribute '{name}'")

__all__ = ["workflow_erotetic"]

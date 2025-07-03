from setuptools import setup, find_packages

setup(
    name="magi-cli",
    version="1.0.0",
    packages=find_packages(),
    install_requires=[
        "click",
        "websocket-client",
        "colorama"
    ],
    entry_points={
        "console_scripts": [
            "magi=magi_cli.main:magi",
        ],
    },
)

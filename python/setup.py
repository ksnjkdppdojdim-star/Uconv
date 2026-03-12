from setuptools import setup, find_packages

setup(
    name="uconv",
    version="0.1.0",
    description="Lightweight unit converter library",
    author="",
    author_email="",
    packages=find_packages(),
    python_requires=">=3.6",
    extras_require={
        'dev': ['pytest>=7.0']
    },
    classifiers=[
        "Development Status :: 3 - Alpha",
        "Intended Audience :: Developers",
        "License :: OSI Approved :: MIT License",
        "Programming Language :: Python :: 3",
        "Programming Language :: Python :: 3.6",
        "Programming Language :: Python :: 3.7",
        "Programming Language :: Python :: 3.8",
        "Programming Language :: Python :: 3.9",
        "Programming Language :: Python :: 3.10",
        "Programming Language :: Python :: 3.11",
    ],
    keywords="units converter measurement distance weight time currency",
)

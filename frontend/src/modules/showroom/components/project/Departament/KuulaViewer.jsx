function KuulaViewer({ url }) {
    if (!url) return null;

    return (
        <div className="w-full h-full overflow-hidden">
            <iframe
                src={url}
                title="Tour 360°"
                className="w-full h-full border-0"
                allow="fullscreen; gyroscope; accelerometer"
                allowFullScreen
            />
        </div>
    );
}

export default KuulaViewer;